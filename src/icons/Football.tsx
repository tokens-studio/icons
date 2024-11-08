import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFootball = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 9.219V14M3.333 2v7.219h9.334V2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 4.488c.714-.412.955-1.409 1.032-1.888a.336.336 0 0 0-.214-.371c-.453-.173-1.438-.463-2.152-.05-.713.412-.955 1.409-1.032 1.888a.336.336 0 0 0 .214.37c.454.174 1.438.463 2.152.051'
		/>
	</svg>
);
export default SvgFootball;
