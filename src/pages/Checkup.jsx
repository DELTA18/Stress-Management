import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

const Checkup = () => {
  // Mental Features
  const [anxiety, setAnxiety] = useState(0)
  const [selfEsteem, setSelfEsteem] = useState(0)
  const [mentalHealthHistory, setMentalHealthHistory] = useState(false)
  const [depression, setDepression] = useState(0)
  const [futureCareer, setFutureCareer] = useState(0)
  const [peerPressure, setPeerPressure] = useState(0)

  // Health Features
  const [headAche, setHeadache] = useState(0)
  const [bloodPressure, setBloodPressure] = useState(0)
  const [sleepQuality, setSleepQuality] = useState(0)
  const [breathingProblem, setBreathingProblem] = useState(0)

  // Environment Features
  const [noiseLevel, setNoiseLevel] = useState(0)
  const [livingCondition, setLivingCondition] = useState(0)
  const [safety, setSafety] = useState(0)
  const [basicNeeds, setBasicNeeds] = useState(0)
  const [socialSupport, setSocialSupport] = useState(0)
  const [extraCurricular, setExtraCurricular] = useState(0)
  const [bullying, setBullying] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      anxiety,
      selfEsteem,
      mentalHealthHistory,
      depression,
      futureCareer,
      peerPressure,
      headAche,
      bloodPressure,
      sleepQuality,
      breathingProblem,
      noiseLevel,
      livingCondition,
      safety,
      basicNeeds,
      socialSupport,
      extraCurricular,
      bullying,
    }
    console.log("Form Submitted: ", data)
  }

  // Reusable slider with label + value chip
  const FeatureSlider = ({ label, value, setValue, max }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label className="text-gray-700">{label}</Label>
        <span className="px-2 py-1 text-xs rounded-full bg-teal-100 text-teal-700 font-medium">
          {value}/{max}
        </span>
      </div>
      <Slider
        max={max}
        step={1}
        value={[value]}
        onValueChange={(val) => setValue(val[0])}
        className="accent-teal-500"
      />
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white flex items-start justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl"
      >
        <Card className="border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
          <CardHeader className="bg-teal-500 text-white py-6 px-8">
            <CardTitle className="text-3xl font-bold tracking-tight">
              Wellness Checkup
            </CardTitle>
            <p className="text-sm opacity-90 mt-1">
              Rate your wellness across mental, physical, and environmental aspects.
            </p>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="p-8 space-y-12">
              {/* Mental Features */}
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Mental Health
                </h2>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FeatureSlider label="Anxiety" value={anxiety} setValue={setAnxiety} max={10} />
                  <FeatureSlider label="Self Esteem" value={selfEsteem} setValue={setSelfEsteem} max={10} />
                  <FeatureSlider label="Depression" value={depression} setValue={setDepression} max={10} />
                  <FeatureSlider label="Future Career" value={futureCareer} setValue={setFutureCareer} max={5} />
                  <FeatureSlider label="Peer Pressure" value={peerPressure} setValue={setPeerPressure} max={5} />
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border">
                    <Label className="text-gray-700">Mental Health History</Label>
                    <Switch
                      checked={mentalHealthHistory}
                      onCheckedChange={setMentalHealthHistory}
                    />
                  </div>
                </div>
              </section>

              {/* Physical Health */}
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Physical Health
                </h2>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FeatureSlider label="Headache" value={headAche} setValue={setHeadache} max={5} />
                  <FeatureSlider label="Blood Pressure" value={bloodPressure} setValue={setBloodPressure} max={3} />
                  <FeatureSlider label="Sleep Quality" value={sleepQuality} setValue={setSleepQuality} max={5} />
                  <FeatureSlider label="Breathing Problem" value={breathingProblem} setValue={setBreathingProblem} max={5} />
                </div>
              </section>

              {/* Environment */}
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Environment
                </h2>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FeatureSlider label="Noise Level" value={noiseLevel} setValue={setNoiseLevel} max={5} />
                  <FeatureSlider label="Living Condition" value={livingCondition} setValue={setLivingCondition} max={5} />
                  <FeatureSlider label="Safety" value={safety} setValue={setSafety} max={5} />
                  <FeatureSlider label="Basic Needs" value={basicNeeds} setValue={setBasicNeeds} max={5} />
                  <FeatureSlider label="Social Support" value={socialSupport} setValue={setSocialSupport} max={3} />
                  <FeatureSlider label="Extra Curricular" value={extraCurricular} setValue={setExtraCurricular} max={5} />
                  <FeatureSlider label="Bullying" value={bullying} setValue={setBullying} max={5} />
                </div>
              </section>
            </CardContent>

            <CardFooter className="flex justify-end bg-gray-50 px-8 py-6">
              <Button
                type="submit"
                className="px-8 py-2 rounded-lg font-medium transition-colors duration-200 bg-teal-500 hover:bg-teal-600 text-white"
              >
                Submit
              </Button>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}

export default Checkup
