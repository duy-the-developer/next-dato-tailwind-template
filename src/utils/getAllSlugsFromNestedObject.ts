type NestedObject = {
    slug: string
    parent?: NestedObject
}

export function getAllSlugsFromNestedObject(obj: NestedObject): string[] {
    const slugs: string[] = []

    function collectSlugs(obj: NestedObject) {
        if (!obj) return

        slugs.push(obj.slug)

        if (obj.parent) {
            collectSlugs(obj.parent)
        }
    }

    collectSlugs(obj)

    return slugs.reverse()
}
