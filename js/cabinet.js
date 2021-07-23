var toggleDiv = function(self, id) {
    var li = self.parentNode,
        contents = document.getElementsByClassName('content'),
        menu = document.getElementById('info-menu'),
        children = menu.children,
        child = undefined,
        i = 0;

    // Loop over all content divs and show the active and hide all others.
    for (i = 0; i < contents.length; i++)
        contents[i].style.display = contents[i].id == id ? 'block' : 'none';

    // Loop over all menu items and add active class to the selected
    // and remove from others if applicable.
    for (i = 0; i < children.length; i++) {
        child = children[i];

        if (child === li) {
            child.className = (child.className + ' active').trim();
        } else {
            if (child.className.indexOf('active') > -1) {
                child.className = child.className.replace('active', '').trim();
            }
        }
    }
}