export default function Page(){
  return (
    <div style={{padding:40, textAlign:'center', fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:24, fontWeight:'bold'}}>VELORA - License Required</h1>
      <p style={{marginTop:16}}>Your LICENSE_KEY is missing or invalid.</p>
      <p style={{marginTop:8}}>1. Go to gumroad.com/library</p>
      <p>2. Copy your license key</p>
      <p>3. Add in .env file: LICENSE_KEY=your_key_here</p>
    </div>
  )
}
