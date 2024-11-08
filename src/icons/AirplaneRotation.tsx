import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplaneRotation = ({
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
			d='M6.586 9.415a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829M2.914 11.182A5.97 5.97 0 0 1 2 8a6.006 6.006 0 0 1 6-6M13.143 4.911a6.005 6.005 0 0 1-2.95 8.675C9.513 13.853 8.773 14 8 14'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.414 6.586s-.006-1.868.943-2.828c.94-.94 1.863-1.91 2.829-.943.917.919.01 1.873-.943 2.828-.935.937-2.829.943-2.829.943M6.586 9.414s.006 1.868-.943 2.828c-.94.94-1.863 1.91-2.828.943-.918-.919-.01-1.873.942-2.828.935-.937 2.829-.943 2.829-.943'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgAirplaneRotation;
