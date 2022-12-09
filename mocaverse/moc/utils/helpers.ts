import { SelectOptions } from "@/components/Elements/FormFields/MultiSelectInput";
// const search = document.getElementById("search");
// window.addEventListener("keydown", function (e) {
//   if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
//     if (search !== document.activeElement) {
//       e.preventDefault();
//       console.log("Search is not in focus");
//       if (search) {
//         search.focus();
//       }
//     } else {
//       console.log("Default action of CtrlF");
//       return true;
//     }
//   }
// });

export const formatForSelect = (
  arr: Array<object>,
  asKey: string,
  asTitle: string
) => {
  let list: Array<SelectOptions> = [];

  arr.map((item: any) => {
    list = [
      ...list,
      {
        key: item[asKey],
        title: item[asTitle],
      },
    ];
  });

  return list;
};
