import SimpleImage from "./SimpleImage"


const config = {
    holder: "post",
    logLevel: "VERBOSE",
    placeholder: "Any new inspirations today?",
    tools: {
        image: SimpleImage
    },
    onChange: (api, event) => {
      // saveProgress()
      console.log('Now I know that Editor\'s content changed!', event)
    },
    data: {
        time: 1552744582955,
        blocks: [
          {
            type: "image",
            data: {
              url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg"
            }
          }
        ],
        version: "2.11.10"
    }
  }

export default config