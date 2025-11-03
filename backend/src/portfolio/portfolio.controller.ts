import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('api/portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get('about')
  getAbout() {
    return this.portfolioService.getAbout();
  }

  @Get('formation')
  getFormation() {
    return this.portfolioService.getFormation();
  }

  @Get('experience')
  getExperience() {
    return this.portfolioService.getExperience();
  }

  @Get('projects')
  getProjects() {
    return this.portfolioService.getProjects();
  }

  @Get('skills')
  getSkills() {
    return this.portfolioService.getSkills();
  }

  @Get('contact')
  getContact() {
    return this.portfolioService.getContact();
  }
}
