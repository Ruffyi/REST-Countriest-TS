import { default as bemCssModules } from 'bem-css-modules';
import { default as RootStyles } from './Root.module.scss';

import { IRoot } from './Root.types';

const styled = bemCssModules(RootStyles);

const Root = ({ children }: IRoot) => {
	return <main className={styled()}>{children}</main>;
};

export default Root;
