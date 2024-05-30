function createSlug(title, existingSlugs){
    let slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, '');
    let counter = 1;
    while (existingSlugs.includes(slug)) {
        slug = `${slug}-${counter}`;
        counter++;
    }
    return slug;
};

module.exports = createSlug;
