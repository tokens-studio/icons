import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPrivacyPolicy = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
		height={17}
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
			d='M13.333 8V3.832a.4.4 0 0 0-.117-.282l-2.099-2.1a.4.4 0 0 0-.283-.117H3.067a.4.4 0 0 0-.4.4v12.534c0 .22.179.4.4.4h5.6M5.333 6.667h5.334M5.333 4H8M5.333 9.333h2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 1.333V3.6c0 .22.179.4.4.4h2.266M13.328 10.083l1.704.433a.39.39 0 0 1 .297.39C15.214 14.743 13 15.332 13 15.332s-2.214-.589-2.329-4.428a.39.39 0 0 1 .297-.389l1.704-.433c.215-.054.44-.054.656 0'
		/>
	</svg>
);
export default SvgPrivacyPolicy;
