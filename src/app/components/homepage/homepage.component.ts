import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { TranscriptService } from '../../services/transcript.service';
import { Agent, Calltype, Calls, Transcript } from '../classes';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: HomepageComponent }
  ]
})
export class HomepageComponent implements OnInit {
  agent = new FormControl();
  calltype = new FormControl();
  agents: Agent[];
  calltypes: Calltype[];
  calls: Calls[];
  transcripts: Transcript;
  selectedAgent: Agent;
  selectedCalltype: Calltype;
  matchedAgent: any[];
  matchedCalltype: any[];
  matchCalls: any[] = [];

  constructor( private transcriptService: TranscriptService) { }

  ngOnInit(): void {
    this.transcriptService.getAgents().subscribe(
      (data: Agent[]) => this.agents = data,
      (err: any) => console.log(err),
      () => console.log('All done getting agents')
    );

    this.transcriptService.getCallTypes().subscribe(
      (data: Calltype[]) => this.calltypes = data,
      (err: any) => console.log(err),
      () => console.log('All done getting calltypes')
    );

    this.transcriptService.getTranscripts().subscribe(
      (data: any) => this.transcripts = data,
      (err: any) => console.log(err),
      () => console.log('All done getting transcripts')
    );

    this.selectCalls();
  }

  selectCalls() {
    console.log(this.selectedAgent);
    console.log(this.selectedCalltype);
    this.matchedAgent = [];
    this.matchedCalltype = [];
    this.transcriptService.getCalls().subscribe(
      async (data: any) => this.calls = await data,
      (err: any) => console.log(err),
      () => {
        this.calls.forEach(call => {
          call.agent.forEach(agent => {
            console.log(agent);
            
            if (agent.agent_id == String(this.selectedAgent)){
              this.matchedAgent.push(call);
              console.log(this.matchedAgent);
            }
            this.matchedAgent.forEach(agent => {
              if (agent.calltype_id == this.selectedCalltype) {
                this.matchedCalltype.push(agent);
              }
            });
            this.matchCalls = this.matchedCalltype;
          });
        });
      });
    console.log(this.matchedCalltype);
  }

}
