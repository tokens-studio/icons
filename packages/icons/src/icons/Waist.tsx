import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWaist = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M12.2667 2.66675C12.2667 2.66675 11.2 5.16722 11.2 7.23815C11.2 7.90121 11.4272 8.45608 11.7333 9.00868C12.0856 9.64468 12.5424 10.2776 12.8777 11.0691C13.1438 11.6971 13.3334 12.425 13.3334 13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.73341 2.66675C3.73341 2.66675 4.80008 5.16722 4.80008 7.23815C4.80008 7.90121 4.57287 8.45608 4.26675 9.00868C3.91445 9.64468 3.45763 10.2776 3.12235 11.0691C2.85628 11.6971 2.66675 12.425 2.66675 13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.2666 9.00854H11.7333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.12231 11.0691C3.12231 11.0691 6.93341 11.8096 8.00008 13.3334C9.06675 11.8096 12.8777 11.0691 12.8777 11.0691'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWaist;
