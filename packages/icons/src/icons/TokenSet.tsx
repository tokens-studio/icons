import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTokenSet = ({
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
			d='M10 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8V9M12 11H8M9.5 15H8M16 7H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16.25 11.8874C16.8688 11.5301 17.6312 11.5301 18.25 11.8874L21.0131 13.4827C21.6319 13.84 22.0131 14.5002 22.0131 15.2148V18.4054C22.0131 19.1199 21.6319 19.7801 21.0131 20.1374L18.25 21.7327C17.6312 22.09 16.8688 22.09 16.25 21.7327L13.4869 20.1374C12.8681 19.7801 12.4869 19.1199 12.4869 18.4054V15.2148C12.4869 14.5002 12.8681 13.84 13.4869 13.4827L16.25 11.8874Z'
			stroke='currentColor'
		/>
		<path
			d='M17.7983 16.2984C17.6614 16.1517 17.4664 16.0601 17.25 16.0601C16.9876 16.0601 16.7567 16.1948 16.6227 16.3989M17.7983 16.2984C17.9234 16.4324 18 16.6123 18 16.8101C18 17.2243 17.6642 17.5601 17.25 17.5601C16.8358 17.5601 16.5 17.2243 16.5 16.8101C16.5 16.6582 16.5451 16.5169 16.6227 16.3989M17.7983 16.2984L17.2105 16.3486L16.6227 16.3989'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgTokenSet;
