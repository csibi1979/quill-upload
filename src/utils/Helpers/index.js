import Constants from "../Constants";

export default {
  id: 0,
  prefix: "QUILL_UPLOAD_HANDLER",
  generateID: function () {
    const id = this.id;

    this.id = id + 1;
    return `${this.prefix}-${id}`;
  },
  loadingHTML: function () {
    return `<div id="${Constants.ID_SPLIT_FLAG}.QUILL-LOADING">
              <span class="quill-progress"></span>
            </div>`;
  },
  attachmentIconHTML: function () {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Attach</title><path d="M216.08 192v143.85a40.08 40.08 0 0080.15 0l.13-188.55a67.94 67.94 0 10-135.87 0v189.82a95.51 95.51 0 10191 0V159.74" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>`;
  },
};
