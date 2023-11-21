const CreateTool = function () {};
CreateTool.prototype = {
  getEl: function (context: string) {
    const text = this.stringSplit(context);
    switch (text[0]) {
      case 'id':
        return document.getElementById(text[1]);
      case 'class':
        return document.getElementsByClassName(text[1])[0];
    }
  },
  stringSplit: function (context: string) {
    let test;
    if (/(id|class):[\w]+/.test(context)) {
      test = context.split(':');
    }
    return test;
  },
};

export const Tool = new CreateTool();
