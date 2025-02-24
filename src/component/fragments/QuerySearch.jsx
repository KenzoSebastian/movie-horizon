import useQueryMovie from '../../hooks/useQueryMovie';

const QuerySearch = () => {
  const queryDefault = useQueryMovie()[0];
  
  return (
    <div>QuerySearch</div>
  )
}

export default QuerySearch