window.onload = function (e) {
    const blocks = document.querySelectorAll('.some-block');
    const viewers = document.getElementById('viewer');
    var viewerList
    
    console.log("kho vcc");

    // console.log(viewerList.length);

    var dragItem = null;

    console.log(viewers);
    blocks.forEach(block => {
        console.log(block);
        block.addEventListener('dragstart', function (e) {
            dragItem = block
            viewerList = viewers.querySelectorAll('.textLayer > span')
            console.log(viewerList);
            setTimeout(() => {
                block.style.display = 'none'
            }, 0)
            viewerList.forEach((viewer) => {
                viewer.addEventListener('dragover', function (e) {
                    e.preventDefault()
                })
                viewer.addEventListener('dragenter', function (e) {
                    e.preventDefault()
                })
                viewer.addEventListener('drop', function (e) {
                    console.log('drop');
                    this.append(dragItem)
                })
            })
        })
        block.addEventListener('dragend', function (e) {
            setTimeout(() => {
                dragItem.style.display = 'block'
                dragItem = null
            }, 0)
        })
    })
}