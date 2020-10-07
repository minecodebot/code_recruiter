import React from 'react';

import { HashtagIcon, HashtagIconCertified } from './styles';

export interface Props {
	tag: (string | boolean)[];
}

const SkillItem: React.FC<Props> = ({ tag }) => {
  return (
	<>
		{tag[1] ? <span className="tag"><span><HashtagIconCertified />{tag[0]}{' '}</span><span className='certified'> Certified</span></span>:<span className="tag"><span><HashtagIcon />{tag[0]}</span></span>}
	</>
);
};

export default SkillItem;
