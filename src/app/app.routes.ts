import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills/skills.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {SocialLifeComponent} from './social-life/social-life.component';
import {ItTrainerComponent} from './it-trainer/it-trainer.component';
import {AchievementComponent} from './achievement/achievement.component';
import {SoclifeComponent} from './soclife/soclife.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'itTrainer', component: ItTrainerComponent },
  { path: 'Achievements/:name', component: AchievementComponent },
  { path: 'SocialLife/:name', component: SoclifeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'qualification', component: ExperienceComponent },
  // { path: 'skill', component: SkillsComponent },
  // { path: 'achievements', component: AchievementsComponent },
  // { path: 'social', component: SocialLifeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
