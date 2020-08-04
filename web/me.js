window.onload = function(e) {
    const blocks = document.querySelectorAll('.some-block');
    const viewers = document.getElementById('viewer');
    var viewerList

    // add block to #viewer
    // var newBlock = document.createElement("span");
    // newBlock.createTextNode = "some node"
    // console.log(newBlock);

    var dragItem = null;

    blocks.forEach(block => {
        block.addEventListener('dragstart', function(e) {
            dragItem = block
            viewerList = viewers.querySelectorAll('.textLayer > *')
            setTimeout(() => {
                block.style.display = 'none'
            }, 0)
        })
        block.addEventListener('dragend', function(e) {
            dragItem.style.position = 'absolute';
            dragItem.style.left = e.clientX + 'px';
            dragItem.style.top = e.clientY + 'px';

            // dragItem.style.left = Math.abs(e.screenX + 1000) + 'px';
            // dragItem.style.top = e.screenY + 'px';

            setTimeout(() => {
                dragItem.style.display = 'inline-block'
                dragItem = null
            }, 0)
        })
    })

    console.log(viewerList);
    viewerList.forEach((viewer) => {
        viewer.addEventListener('dragstart', function(e) {
            console.log("dragstart");
            // e.preventDefault()
        })
        viewer.addEventListener('dragenter', function(e) {
            console.log("dragenter");
            // e.preventDefault()
        })
        viewer.addEventListener('drop', function(e) {
            console.log("drop");
            console.log(block);
            this.append(dragItem)
        })
    })
}