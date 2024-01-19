import KafkaConfig from "./config.js"


const senMessageToKafka = async (req, res) => {
    try{
        const {message} =  req.body
        const kafkaConfig = new KafkaConfig()
        const messages = [
            { key : 'key1', value: message}
        ]
        kafkaConfig.produce("my-topic",message)
        res.status(200).json({
            status : "Ok!",
            message: "Message successfully send!"
        })
    }catch(err){
        console.log(err)
    }
}

const controllers = { senMessageToKafka }

export default controllers