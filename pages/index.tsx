export default function Home() {
 return (
    <h1>Hello NLW</h1>
  )
}

export const getServerSideProps = async () => {
 const response = await fetch('http://localhost:3333/pools/count') 
 const data = await response.json()
  
console.log(data)

}
