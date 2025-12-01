function generatePlaceholder(width, height, bgColor, textColor, text) {
    const canvas = document.getElementById("placeholder");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    // Text
    ctx.fillStyle = textColor;
    ctx.font = `${Math.floor(width / 10)}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text || `${width}x${height}`, width / 2, height / 2);

    // Update image
    const img = document.getElementById("placeholderImg");
    img.src = canvas.toDataURL("image/png");

    // Compute full URL for static site
    // Handles subdirectory like /dev_kit/
    const basePath = window.location.pathname.replace(/\/[^/]*$/, ''); // remove last file
    const fullURL = `${window.location.origin}${basePath}/${width}x${height}/${bgColor.replace('#','')}/${textColor.replace('#','')}/png`;
    document.getElementById("usageInput").value = fullURL;
}

// Copy button functionality
document.getElementById("copyBtn").addEventListener("click", () => {
    const input = document.getElementById("usageInput");
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied: " + input.value);
});

// Automatically parse URL and generate placeholder
window.addEventListener('DOMContentLoaded', () => {
    const pathParts = window.location.pathname.split('/').slice(-4);
    let [size, bg, fg, type] = pathParts;

    // Defaults
    type = type || 'png';
    const [width, height] = size ? size.split('x').map(Number) : [400, 300];
    bg = bg ? `#${bg}` : '#eeeeee';
    fg = fg ? `#${fg}` : '#444444';
    const text = `${width}x${height}`;

    generatePlaceholder(width, height, bg, fg, text);
});
