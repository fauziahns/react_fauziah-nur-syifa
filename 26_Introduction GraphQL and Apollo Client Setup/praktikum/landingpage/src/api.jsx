
const baseURL = 'https://642db251bf8cbecdb40cd2d5.mockapi.io/api/products/'

class api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrypost: []
        }
    }
 
	//Life Circle Component react
    componentDidMount() {
        this.GetDataAPi()
    }
 
    GetDataAPi() {
 
        fetch(baseURL).then(res => {
            if (res.status === 200)
                return res.json()
        }).then(resdata => {
            console.log(resdata)
            this.setState({
                arrypost: resdata
            })
        })
    }
 
    render() {
        return (
            <div className="container">
                fatch data from Api JsonPlaceHolder
            </div>
        )
    }
}
 
export default api