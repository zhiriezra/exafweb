"use client";

import type React from "react";

import classNames from "classnames";
import { Check } from "lucide-react";
import { useState } from "react";

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <div className="w-full max-w-6xl mx-auto my-20">
      <div className="flex flex-col md:flex-row gap-2 bg-white p-1 rounded-lg shadow-sm mb-6">
        <TabButton
          active={activeTab === "development"}
          onClick={() => setActiveTab("development")}
        >
          For Development
        </TabButton>
        <TabButton
          active={activeTab === "enterprise"}
          onClick={() => setActiveTab("enterprise")}
        >
          For Enterprise
        </TabButton>
        <TabButton
          active={activeTab === "government"}
          onClick={() => setActiveTab("government")}
        >
          For Government
        </TabButton>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {activeTab === "development" && (
          <TabContent
            title="Development Solutions"
            description="Comprehensive tools and features for sustainable agricultural development"
            features={[
              {
                title: "Sustainable Production",
                description:
                  "Our platform provides tools to implement eco-friendly farming practices with advanced monitoring capabilities. Farmers can track resource usage, optimize crop rotation cycles, and reduce environmental impact while maintaining high yields. The system includes soil health monitoring, water usage optimization, and sustainable pest management techniques.",
              },
              {
                title: "Farmers Marketplace",
                description:
                  "A digital platform connecting farmers directly with buyers, eliminating intermediaries and ensuring fair prices. Farmers can create detailed product listings with images and specifications, negotiate prices in real-time, and complete secure transactions. The marketplace includes rating systems, delivery tracking, and dispute resolution mechanisms.",
              },
              {
                title: "Agents Empowerment",
                description:
                  "Our mobile tools equip agricultural agents with everything needed for effective field operations. Features include offline data collection capabilities, farmer advisory services based on real-time data, and decision support systems. Agents can synchronize collected data when connectivity is available and access a knowledge base of best practices.",
              },
              {
                title: "Gender Inclusion",
                description:
                  "Specialized programs designed to promote women's participation in agriculture. The platform includes targeted training modules addressing gender-specific challenges, networking opportunities connecting women farmers, and prioritized access to resources and financial services. Performance metrics track participation and success rates.",
              },
            ]}
          />
        )}

        {activeTab === "enterprise" && (
          <TabContent
            title="Enterprise Solutions"
            description="Scalable solutions for agricultural businesses and organizations"
            features={[
              {
                title: "Effective Rural Marketing",
                description:
                  "Our analytics suite provides powerful tools for rural market penetration. Businesses can conduct demographic analysis of farming communities, manage targeted marketing campaigns, and track impact across remote locations. The platform includes visualization tools for market segmentation and campaign performance metrics.",
              },
              {
                title: "Last-Mile Reach",
                description:
                  "Innovative distribution solutions designed specifically for reaching remote farming communities. The system features AI-powered route optimization to minimize delivery costs, comprehensive inventory management across distribution points, and real-time delivery tracking systems that work even in areas with limited connectivity.",
              },
              {
                title: "Last-Mile Visibility",
                description:
                  "End-to-end tracking and monitoring of agricultural products from farm to market. Our platform ensures complete supply chain transparency with quality control checkpoints throughout the journey. Advanced traceability features allow enterprises to verify product origins and handling conditions, building trust with consumers.",
              },
              {
                title: "Market Insights",
                description:
                  "Our market intelligence platform provides comprehensive real-time data on agricultural trends, prices, and demand patterns across regions. Features include predictive analytics to forecast market movements, custom reporting tools for executive decision-making, and alerts for significant market changes that might affect business operations.",
              },
            ]}
          />
        )}

        {activeTab === "government" && (
          <TabContent
            title="Government Solutions"
            description="Tools and systems for agricultural policy implementation and monitoring"
            features={[
              {
                title: "Out-grower Support",
                description:
                  "A comprehensive management system for government-sponsored out-grower schemes. Officials can manage farmer registration with demographic data collection, track input distribution to ensure equitable resource allocation, and monitor yields across participating farms. The system generates reports on program effectiveness and return on investment.",
              },
              {
                title: "Intervention Monitoring",
                description:
                  "Advanced tracking system designed specifically for agricultural intervention programs. Features include impact assessment tools measuring program outcomes against targets, beneficiary management to prevent duplication of services, and real-time progress monitoring dashboards for program administrators and stakeholders.",
              },
              {
                title: "Policy Alignment",
                description:
                  "Specialized tools ensuring agricultural initiatives align with national and regional policies. The platform includes compliance tracking across implementing agencies, policy impact assessment frameworks, and standardized reporting templates. Administrators can identify policy gaps and overlaps to optimize resource allocation.",
              },
              {
                title: "Strengthening",
                description:
                  "Comprehensive capacity building and institutional strengthening tools for agricultural agencies. The system includes training management modules tracking staff development, performance monitoring against institutional goals, and resource optimization features. Analytics identify operational bottlenecks and suggest efficiency improvements.",
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}

function TabButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "flex-1 py-3 px-4 text-sm cursor-pointer md:text-base font-medium rounded-lg transition-all",
        active
          ? "bg-[#1F6306] text-white shadow-sm"
          : "text-gray-600 hover:bg-green-50"
      )}
    >
      {children}
    </button>
  );
}

function TabContent({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: { title: string; description: string }[];
}) {
  return (
    <div className="p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-500 mt-2 mb-8">{description}</p>

      <div className="space-y-8">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1 bg-green-50 rounded-full p-2 w-fit flex-shrink-0">
        <Check className="w-5 h-5 text-[#1F6306]" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
