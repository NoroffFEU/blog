
export function setImagePreview() {
    const mediaInput = document.querySelector("#mediaField");
    const previewImage = document.querySelector("#pImage");
  
    const updatePreview = () => {
        const url = mediaInput.value;
        previewImage.src = url;
    };
  
    if (mediaInput && previewImage) {
        // Update preview when input value changes
        mediaInput.addEventListener('input', updatePreview);
        
        // Update preview when page loads
        window.addEventListener('load', updatePreview);
        
        // Call updatePreview directly when the page loads
        updatePreview();
    } else {
        console.error("Media input or preview image element not found");
    }
  }



  