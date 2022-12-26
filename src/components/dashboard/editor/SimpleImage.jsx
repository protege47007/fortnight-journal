class SimpleImage{
    constructor({data, api}){
        this.api = api
        this.data = data
        this.wrapper = undefined
    }

    static get toolbox() {
        return {
          title: 'Image',
          icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
        }
    }
    
    render(){
        // accepts an image url
        // 1) first create a separate image file upload point
        // 2) save image to a temp section, and return it's id 
        // 3) create an image stream point
        // side-mission: create an edit and delete button attached to a thumbnail of the images
        // 4) feed the new image url to the input i.e. localhost:4747/image/image_id
        
        this.wrapper = document.createElement('div')
        this.wrapper.classList.add("py-5")

        if(this.data && this.data.url){
            this._createImage(this.data.url, this.data.caption);
            return this.wrapper;
        }

        const input = document.createElement('input')
        
        input.classList.add("w-full", "p-3", "rounded", "outline-none", "border", "border-teal-500")

        this.wrapper.appendChild(input)
        
        input.placeholder = 'Paste an image URL...'
        input.value = this.data && this.data.url ? this.data.url : ''

        input.addEventListener('paste', (event) => {
            this._createImage(event.clipboardData.getData('text'))
        })
        
        return this.wrapper
        
    }

    _createImage(url, caption_value){
        console.log(url)

        const image = document.createElement('img')
        const caption = document.createElement('div')

        image.src = url
        image.classList.add("max-w-10/12", "mb-5")

        caption.contentEditable = true
        caption.classList.add("w-full", "py-1", "px-3", "rounded", "outline-none", "text-gray-500")
        caption.placeholder = 'Caption...'
        caption.value = caption_value || ''

        this.wrapper.innerHTML = ''
        this.wrapper.appendChild(image)
        this.wrapper.appendChild(caption)
    }

    save(block_content){
        const image = block_content.querySelector('img')
        const caption = block_content.querySelector('[contenteditable]')

        const sanitizerConfig = {
            b: true, 
            a: {
               href: true
            },
            i: true
        }

        return Object.assign(this.data, {
            url: image.src,
            caption: this.api.sanitizer.clean(caption.innerHTML || "", sanitizerConfig) //caption.value
        })
    }

    validate(savedData){
        if (!savedData.url.trim()){
          return false
        }
    
        return true
    }
}

export default SimpleImage