import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  
  gap: 2rem;

   @media (min-width: 400px) {
  
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 
  }
`;

export default Wrapper;
