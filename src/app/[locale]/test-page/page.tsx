import { getAllPageSlugsQuery } from '@/lib/datocms/queries/getAllPagesSlugQuery'

export default async function TestPage() {
    console.log(getAllPageSlugsQuery({ locale: 'en', depth: 4 }))

    return <>This is the test page</>
}
