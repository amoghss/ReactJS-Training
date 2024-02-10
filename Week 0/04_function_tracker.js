let instance_count = 0;
let net_invocations = 0;
let fetch_my_function = () => {
    instance_count++;    
    let my_function = () => {
        let invocation_count = 0;
        let do_something = () => {
            console.log("Function was invoked");
            invocation_count++;
            net_invocations++;
        }
        let getInvocations = () => console.log("Invocation Count -> ", invocation_count); // Invocations Via Current instance
        let getInstances = () => console.log("Instance Count -> ", instance_count); // Total Instances created
        let getTotalInvocations = () => console.log("Total Invocations -> ", net_invocations); // Total invocations summing all instances
        return{
            do_something, getInvocations, getInstances, getTotalInvocations
        }
    }
    return my_function();
}