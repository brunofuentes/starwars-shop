import { Link } from 'react-router-dom';

function PreviousPageBtn(props: { text: string; to: string }) {
  const { text, to } = props;
  return (
    <Link to={to} className="flex py-1">
      <img
        height="15px"
        width="15px"
        className="invert"
        src="/src/assets/icons/chevron_left.svg"
        alt="Voltar para Loja"
      />
      {text}
    </Link>
  );
}

export default PreviousPageBtn;
