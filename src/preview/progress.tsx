import ProgressBar from '../components/atoms/progress/ProgressBar'

const Progress = () => {
	return (
		<>
			<ProgressBar now={25} min={0} max={100} />
			<ProgressBar now={50} min={0} max={100} />
			<ProgressBar now={75} min={0} max={100} />
			<ProgressBar now={100} min={0} max={100} />
			<ProgressBar now={35} min={0} max={60} animated />
		</>
	)
}
export default Progress
