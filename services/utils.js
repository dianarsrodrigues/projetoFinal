function encodeHTML(html) {
    return html
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
}

// Function to decode HTML entities
function decodeHTML(encodedHtml) {
return encodedHtml
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

// From base64 to File
function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}
  
function generateImageFromBase64(imgArrayEl) {
    const images = [];
    imgArrayEl?.forEach(imgEl => {
        try {
            const name = Math.random().toString(36).substring(2,15);
            const extension = imgEl.src.substring(11, imgEl.src.indexOf(';base64'));
            const filename = `${name}.${extension}`;
            file = dataURLtoFile(imgEl.src, filename);
            images.push({ filename, file })
        } catch(e) {
            console.error('Something when wrong processing:', imgEl);
        }
    });
    return images;
}

function removeImagesFromText(text, images) {
    let newText = text;
    let imageIndex = 0;

    newText = newText.replace(/<img[^>"']*((("[^"]*")|('[^']*'))[^"'>]*)*>/g, function(match) {
        // Check if there are images left in the array
        if (imageIndex < images.length) {
            const replacedText = `<img class="image-post" src="http://localhost:3000/images/${images[imageIndex].filename}" alt="Image ${imageIndex}"/>`;
            imageIndex++;
            return replacedText;
        } else {
            // If no more images are left, return the original <img> tag
            return match;
        }
    });
    return newText;
}

function getFirstImage(text) {
    let tempElement = document.createElement('div');
    tempElement.innerHTML = text;
    let firstImage = tempElement.querySelector('img');
    if (firstImage) {
        return firstImage.src;
    } else {
        return null;
    }
  }