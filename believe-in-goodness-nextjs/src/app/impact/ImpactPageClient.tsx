'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useState, useEffect } from 'react';
import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import AnimatedNumber from '@/components/AnimatedNumber';

interface ImpactNumbers {
  talent: number;
  partners: number;
  jobs: number;
}

export default function ImpactPageClient() {
  const { t } = useTranslation();
  const [impactNumbers, setImpactNumbers] = useState<ImpactNumbers | null>(null);

  useEffect(() => {
    const fetchImpactNumbers = async () => {
      try {
        const docRef = doc(db, 'impact', 'numbers');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setImpactNumbers(docSnap.data() as ImpactNumbers);
        } else {
          console.log("Firestore document 'impact/numbers' does not exist!");
          setImpactNumbers({ talent: 0, partners: 0, jobs: 0 });
        }
      } catch (error) {
        console.error("Error fetching impact numbers:", error);
        setImpactNumbers({ talent: 0, partners: 0, jobs: 0 });
      }
    };

    fetchImpactNumbers();
  }, []);

  const problems = [
    { key: 'impactProblem1', icon: 'fas fa-school' },
    { key: 'impactProblem2', icon: 'fas fa-user-graduate' },
    { key: 'impactProblem3', icon: 'fas fa-handshake-angle' },
  ];

  const goals = [
    { key: 'impactGoal1', unit: 'impactUnitPeople', icon: 'fas fa-users-gear', numberKey: 'talent' as keyof ImpactNumbers },
    { key: 'impactGoal2', unit: 'impactUnitOrganizations', icon: 'fas fa-building-ngo', numberKey: 'partners' as keyof ImpactNumbers },
    { key: 'impactGoal3', unit: 'impactUnitJobs', icon: 'fas fa-utensils', numberKey: 'jobs' as keyof ImpactNumbers },
  ];

  return (
    <main className="impact-page-main">
      <div className="container">
        <h1 className="page-title">{t('impactMainTitle')}</h1>

        {/* 我們看見的問題 */}
        <section className="impact-section">
          <div className="impact-section-header">
            <Image src="/images/child-looking-out.png" alt="一個望向窗外的小男孩的背影" width={500} height={300} style={{ width: '100%', height: 'auto', borderRadius: 'var(--border-radius)' }} />
          </div>
          <h2>{t('impactProblemsTitle')}</h2>
          <div className="problems-grid">
            {problems.map((problem) => (
              <div key={problem.key} className="problem-card">
                <div className="problem-icon">
                  <i className={problem.icon}></i>
                </div>
                <p>{t(problem.key)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 我們預計 */}
        <section className="impact-section">
          <h2>{t('impactGoalsTitle')}</h2>
          <div className="goals-grid">
            {goals.map((goal) => (
              <div key={goal.key} className="goal-card">
                <div className="goal-icon">
                  <i className={goal.icon}></i>
                </div>
                <div className="goal-text-content">
                  <h3>{t(goal.key)}</h3>
                  <div className="goal-data-wrapper">
                    <div className="goal-number">
                      {impactNumbers ? <AnimatedNumber end={impactNumbers[goal.numberKey]} /> : '...'}
                    </div>
                    <hr className="goal-divider" />
                    <p className="goal-unit">{t(goal.unit)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
