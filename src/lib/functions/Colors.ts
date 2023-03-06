function pickTextColorBasedBgColor(classKey: any){

    const currentTheme = document.querySelector("html")!.getAttribute('data-theme');
    const element = document.querySelector(`[data-theme="${currentTheme}"]`)!;
    const styles = getComputedStyle(element);
    const bgColor = styles.getPropertyValue(classKey);

    const [r, g, b, a] = bgColor.split(",").map((c) => parseInt(c.trim()))
    const red = r;
    const green = g;
    const blue = b;
    const alpha = a;

    if((red*0.299 + green*0.587 + blue*0.114) > 186){
        return "text-black";
    } else{
        return "text-white";
    }
}

export {pickTextColorBasedBgColor}