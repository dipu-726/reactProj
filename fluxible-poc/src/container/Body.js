import connectToStores from "fluxible-addons-react/connectToStores";
import Body from "../components/Body";

const mapStateToProps = (store_context,props) =>{
    return {
        ...props,
        onClick: ()=>{
            context.executeAction()
        }
    }
}
export default connectToStores(Body,[], mapStateToProps);