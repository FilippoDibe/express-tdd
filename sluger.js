function createSlug(title, existingSlugs){
    if (typeof title !== 'string' || title.trim() === '') {
        throw new Error("Invalid title");
    }

    let slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, '');
    if (slug === '') {
        throw new Error("Invalid title");
    }

    let originalSlug = slug;
    let counter = 1;

    while (existingSlugs.includes(slug)) {
        slug = `${slug}-${counter}`;
        counter++;
    }
    return slug;
};

module.exports = createSlug;
