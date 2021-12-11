import Quill from "quill";
import { Constants } from "../../utils";

let BlockEmbed = Quill.import("blots/block/embed");

class AttachmentBlot extends BlockEmbed {
  static create(value) {
    let id;
    let href;

    const arr = value.split(Constants.ID_SPLIT_FLAG);
    if (arr.length > 1) {
      id = arr[0];
      href = arr[1];
    } else {
      href = value;
    }

    let node = super.create(href);
    if (typeof href === "string") {
      node.setAttribute("href", href);
    }

    if (id) {
      node.setAttribute("id", id);
    }

    return node;
  }

  static value(node) {
    return {
      url: node.getAttribute("href"),
    };
  }
}

AttachmentBlot.tagName = "a";
AttachmentBlot.blotName = Constants.blots.attachment;
AttachmentBlot.className = Constants.QUILL_UPLOAD_HOLDER_CLASS_NAME;

export default AttachmentBlot;
