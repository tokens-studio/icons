import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGradient = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<g opacity={0.86}>
			<path d='M16 19H16.01V19.01H16V19Z' stroke='currentColor' />
			<path d='M12 19H12.01V19.01H12V19Z' stroke='currentColor' />
			<path d='M8 19H8.01V19.01H8V19Z' stroke='currentColor' />
			<path d='M4 19H4.01V19.01H4V19Z' stroke='currentColor' />
			<path d='M20 19H20.01V19.01H20V19Z' stroke='currentColor' />
		</g>
		<g opacity={0.72}>
			<path d='M14 17H14.01V17.01H14V17Z' stroke='currentColor' />
			<path d='M10 17H10.01V17.01H10V17Z' stroke='currentColor' />
			<path d='M6 17H6.01V17.01H6V17Z' stroke='currentColor' />
			<path d='M18 17H18.01V17.01H18V17Z' stroke='currentColor' />
		</g>
		<g opacity={0.56}>
			<path d='M16 15H16.01V15.01H16V15Z' stroke='currentColor' />
			<path d='M12 15H12.01V15.01H12V15Z' stroke='currentColor' />
			<path d='M8 15H8.01V15.01H8V15Z' stroke='currentColor' />
			<path d='M4 15H4.01V15.01H4V15Z' stroke='currentColor' />
			<path d='M20 15H20.01V15.01H20V15Z' stroke='currentColor' />
		</g>
		<g opacity={0.48}>
			<path d='M14 13H14.01V13.01H14V13Z' stroke='currentColor' />
			<path d='M10 13H10.01V13.01H10V13Z' stroke='currentColor' />
			<path d='M6 13H6.01V13.01H6V13Z' stroke='currentColor' />
			<path d='M18 13H18.01V13.01H18V13Z' stroke='currentColor' />
		</g>
		<g opacity={0.32}>
			<path d='M16 11H16.01V11.01H16V11Z' stroke='currentColor' />
			<path d='M12 11H12.01V11.01H12V11Z' stroke='currentColor' />
			<path d='M8 11H8.01V11.01H8V11Z' stroke='currentColor' />
			<path d='M4 11H4.01V11.01H4V11Z' stroke='currentColor' />
			<path d='M20 11H20.01V11.01H20V11Z' stroke='currentColor' />
		</g>
		<g opacity={0.16}>
			<path d='M14 9H14.01V9.01H14V9Z' stroke='currentColor' />
			<path d='M10 9H10.01V9.01H10V9Z' stroke='currentColor' />
			<path d='M6 9H6.01V9.01H6V9Z' stroke='currentColor' />
			<path d='M18 9H18.01V9.01H18V9Z' stroke='currentColor' />
		</g>
		<g opacity={0.08}>
			<path d='M16 7H16.01V7.01H16V7Z' stroke='currentColor' />
			<path d='M12 7H12.01V7.01H12V7Z' stroke='currentColor' />
			<path d='M8 7H8.01V7.01H8V7Z' stroke='currentColor' />
			<path d='M4 7H4.01V7.01H4V7Z' stroke='currentColor' />
			<path d='M20 7H20.01V7.01H20V7Z' stroke='currentColor' />
		</g>
	</svg>
);
export default SvgGradient;
