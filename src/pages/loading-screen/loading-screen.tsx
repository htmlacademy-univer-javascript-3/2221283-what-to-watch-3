import spinner from './spinner.gif';

export default function LoadingScreen() {
  return (
    <div style={{
      position: 'fixed',
      backgroundPosition:'center',
    }}
    >
      <img src={spinner}/>
    </div>
  );
}
