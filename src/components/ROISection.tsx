"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ROISection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* ROI Math */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            The math is simple
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <div className="text-3xl font-bold text-blue-600">200</div>
              <div className="text-sm text-gray-500 mt-2">
                internet leads per month
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <div className="text-3xl font-bold text-blue-600">3%</div>
              <div className="text-sm text-gray-500 mt-2">
                more convert to appointments
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <div className="text-3xl font-bold text-blue-600">$2,500</div>
              <div className="text-sm text-gray-500 mt-2">
                average gross per car
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block px-8 py-4 rounded-xl bg-green-50 border border-green-200">
              <div className="text-sm text-green-700 font-medium">
                That&apos;s 6 extra deals per month
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                $15,000/mo in recovered margin
              </div>
            </div>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            How it works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Step
              number="1"
              title="Lead enters your CRM"
              description="New internet lead syncs into Spyne's system automatically: web form, third-party provider, or live call."
            />
            <Step
              number="2"
              title="AI agent follows up"
              description="Personalized SMS sequence over 14 days. Each message reads CRM data, live inventory, and full conversation history."
            />
            <Step
              number="3"
              title="Customer replies, appointment booked"
              description="When the lead responds, the agent qualifies them and books a showroom appointment directly in your CRM."
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to stop losing leads?
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Start your pilot and see your first follow-up sequence go live
            within days.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md shadow-blue-200 hover:shadow-blue-300">
              Start Your Pilot
            </button>
            <button className="px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all border border-gray-300 hover:border-gray-400">
              Talk to Our Team
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-200 text-center">
          <div className="flex items-center justify-center gap-2">
            <Image src="/spyne-logo.webp" alt="Spyne" width={120} height={36} className="h-8 w-auto" />
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">
              AI Agents for Auto Dealerships
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            All conversations shown are from real test interactions with Spyne&apos;s AI agent.
          </p>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm border border-blue-200">
        {number}
      </div>
      <h4 className="mt-4 text-base font-semibold text-gray-900">{title}</h4>
      <p className="mt-2 text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
