import SimpleImage from "./SimpleImage"
import Header from "@editorjs/header"
import Checklist from "@editorjs/checklist"
import Embed from "@editorjs/embed"
import Quote from "@editorjs/quote"
import NestedList from "@editorjs/nested-list"
import Table from "@editorjs/table"
import MarkerTool from "./Marker"


const config = {
    holder: "post",
    logLevel: "VERBOSE",
    placeholder: "Any new inspirations today?",
    tools: {
        image: {
            class: SimpleImage,
            inlineToolbar: true
        },
        marker: {
            class: MarkerTool,
            inlineToolbar: true
        },
        header: {
            class: Header,
            config: {
              placeholder: "Enter a header",
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 3
            },
            shortcut: "CMD+SHIFT+H"
        },
        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },
        list: {
            class: NestedList,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered"
            }
        },
        embed: {
            class: Embed,
            config: {
                services: {
                    youtube: true,
                    twitter: true,
                    pinterest: true,
                    facebook: true,
                    instagram: true,
                }
            },
            inlineToolbar: true
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+O",
            config: {
                quotePlaceholder: "Enter a quote",
                captionPlaceholder: "Quote\"s author",
            },
        },
        table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
        }
    },
    onChange: (api, event) => {
      // saveProgress()
      console.log("Now I know that Editor\"s content changed!", event)
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