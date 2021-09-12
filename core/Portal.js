import React from 'react';
import { View, Text } from 'react-native';


const globalState = (()=>{
    let keys = {};
    let watchers = {};
    return {
        get: key => keys[key],
        set: (key, value)=>{
            const oldValue = keys[key];
            keys[key] = value;
            (watchers[key]||[]).forEach(fn=>fn(value, oldValue));
        },
        watch: (key, watcher)=>{
            if(!watchers[key]) watchers[key] = [];
            watchers[key] = [...watchers[key], watcher];
        },
        unwatch: (key, watcher)=>{
            watchers[key] = [...watchers[key]].filter(_w=>_w!==watcher)
        }
    }

})();
globalState.set('_id', 1);

// globalState.watch('test', console.log);



export default function Portal(props){
    const [id, _] = React.useState(globalState.get('_id'));
    const [counter, setCounter] = React.useState(0);
    globalState.set('_id', globalState.get('_id')+1);


    React.useEffect(()=>{
        if(props.type === 'container'){
            const fn = ()=>setCounter(counter+1);
            globalState.watch(props.id, fn);
            return ()=>globalState.unwatch(props.id, fn);
        }
    }, [props.type, counter])


    React.useEffect(()=>{
        const curChildren = globalState.get(props.id)||[];
        const curIndex = curChildren.findIndex(row=>row.id === id)
        const row = { id, children: props.children };
        globalState.set(
            props.id, 
            curIndex === -1
            ? [...curChildren, row]
            : [...curChildren.slice(0, curIndex), row, ...curChildren.slice(curIndex+1)]
        )
        return ()=>{
            globalState.set(props.id, (globalState.get(props.id)||[]).filter(row=>row.id!==id) )
        }
        
    }, [props.children])

    if(props.type === 'item') {
        return null;
    }
    else if(props.type === 'container') {
        return (
            <View>
                {(globalState.get(props.id)||[]).map(row=>(
                    <React.Fragment key={row.id}>
                      {React.Children.map(row.children, child=>React.cloneElement(child, { ...props, ...child.props }))}
                    </React.Fragment>
                ))}
            </View>
        )
    }
    else {
        throw new Error('Portal must be either a container or item');
    }

}