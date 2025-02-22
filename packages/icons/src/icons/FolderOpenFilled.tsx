import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolderOpenFilled = ({
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
			d='M0.823883 2.8975C0.823883 2.21764 1.37566 1.66586 2.05552 1.66586H5.55407C5.96227 1.66586 6.34232 1.86715 6.57246 2.20426L7.56059 3.65619C7.57669 3.68002 7.5984 3.69953 7.62379 3.71303C7.64919 3.72653 7.67751 3.73359 7.70627 3.73361H12.0867C12.7665 3.73361 13.3183 4.28468 13.3183 4.96524V5.04759H3.22241C3.06776 5.0529 2.92123 5.11807 2.8137 5.22935C2.70618 5.34063 2.64608 5.48931 2.64608 5.64405C2.64608 5.79879 2.70618 5.94748 2.8137 6.05876C2.92123 6.17003 3.06776 6.2352 3.22241 6.24052H14.1199C14.2184 6.2405 14.3158 6.26115 14.4058 6.30113C14.4958 6.34112 14.5765 6.39956 14.6425 6.47266C14.7085 6.54576 14.7584 6.6319 14.789 6.72551C14.8196 6.81912 14.8303 6.91812 14.8202 7.0161L14.1959 13.1025C14.1213 13.8415 13.6442 14.3341 12.9643 14.3341H2.05552C1.72887 14.3341 1.4156 14.2044 1.18462 13.9734C0.953645 13.7424 0.823883 13.4291 0.823883 13.1025V2.8975Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgFolderOpenFilled;
