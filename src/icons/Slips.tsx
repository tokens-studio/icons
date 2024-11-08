import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSlips = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.667 3.067c0-.221.179-.4.4-.4h13.866c.221 0 .4.179.4.4v2.608a.41.41 0 0 1-.317.396c-.702.165-2.424.61-3.683 1.262-2.295 1.19-2.62 4.437-2.662 5.589a.424.424 0 0 1-.417.411h-.508a.424.424 0 0 1-.417-.412c-.042-1.151-.367-4.397-2.662-5.588-1.26-.652-2.981-1.097-3.683-1.262a.41.41 0 0 1-.317-.396z'
		/>
	</svg>
);
export default SvgSlips;
