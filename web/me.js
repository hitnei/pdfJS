window.onload = function(e) {
    const blocks = document.querySelectorAll('.some-block');
    const viewers = document.getElementById('viewer');
    var viewerList

    console.log("kho vcc");

    var dragItem = null;

    blocks.forEach(block => {
        block.addEventListener('dragstart', function(e) {
            dragItem = block
            viewerList = viewers.querySelectorAll('.textLayer > span')
            setTimeout(() => {
                block.style.display = 'none'
            }, 0)
            viewerList.forEach((viewer) => {
                viewer.addEventListener('dragover', function(e) {
                    e.preventDefault()
                })
                viewer.addEventListener('dragenter', function(e) {
                    e.preventDefault()
                })
                viewer.addEventListener('drop', function(e) {
                    this.append(dragItem)
                })
            })
        })
        block.addEventListener('dragend', function(e) {
            console.log('e ' + e);
            setTimeout(() => {
                dragItem.style.display = 'inline-block'
                dragItem = null
            }, 0)
        })
    })
}