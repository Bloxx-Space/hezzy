import Post from "../../components/Post"

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
 
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params
  // ...

  return(
    <>
    <Post id={id}/></>
  )
}