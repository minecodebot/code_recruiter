import React from 'react';
import { useRouter } from 'next/router'

import {
  Container,
  Wrapper,
  LinkedInIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Wrapper>
        <div className="left homeIcon" onClick={()=>{router.push('/')}}>
			<LinkedInIcon />
		</div>

        <div className="right">
          <nav>
		  <button onClick={()=>{router.push('/profile/me')}}>
              <ProfileCircle src="https://github.com/guilhermerodz.png" />
              <span>
                Eu
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
