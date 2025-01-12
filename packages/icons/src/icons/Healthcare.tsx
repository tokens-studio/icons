import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHealthcare = ({
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
			d='M12 13.3333L14.5495 10.7838C14.6245 10.7088 14.6667 10.6071 14.6667 10.501V7C14.6667 6.44771 14.2189 6 13.6667 6C13.1144 6 12.6667 6.44771 12.6667 7V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 10.6666L12.572 10.0945C12.6326 10.0339 12.6666 9.95182 12.6666 9.86622C12.6666 9.74388 12.5975 9.63208 12.4881 9.57735L12.1928 9.42975C11.6796 9.17308 11.0596 9.27368 10.6538 9.67948L10.0572 10.2761C9.80709 10.5261 9.66663 10.8653 9.66663 11.2189V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.00004 13.3333L1.45053 10.7838C1.37551 10.7088 1.33337 10.6071 1.33337 10.501V7C1.33337 6.44771 1.78109 6 2.33337 6C2.88566 6 3.33337 6.44771 3.33337 7V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.00004 10.6666L3.42795 10.0945C3.36739 10.0339 3.33337 9.95182 3.33337 9.86622C3.33337 9.74388 3.40248 9.63208 3.51188 9.57735L3.80715 9.42975C4.32047 9.17308 4.94043 9.27368 5.34625 9.67948L5.94285 10.2761C6.1929 10.5261 6.33337 10.8653 6.33337 11.2189V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.11117 7.99996H6.88891V6.44441H5.33337V4.22218H6.88891V2.66663H9.11117V4.22218H10.6667V6.44441H9.11117V7.99996Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHealthcare;
