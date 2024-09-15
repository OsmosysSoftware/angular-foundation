import { Injectable } from '@angular/core';
import { LogLevel, Severity } from '../enums/log-level.enum';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  // eslint-disable-next-line class-methods-use-this
  private generateSessionId(): string {
    return `session-${new Date().getTime()}`;
  }

  private formatLog(
    level: LogLevel,
    severity: Severity,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace = '',
    timestamp = '',
  ): string {
    return JSON.stringify({
      timestamp,
      level,
      tracebackId,
      severity,
      sessionId: this.sessionId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace,
    });
  }

  log(
    level: LogLevel,
    severity: Severity,
    message: string,
    stackTrace: string,
    tracebackId: string = this.generateTracebackId(),
    screenName: string = this.getScreenName(),
    source: string = this.getSource(),
    deviceInfo: string = this.getDeviceInfo(),
    timestamp: string = new Date().toISOString(),
  ): void {
    const formattedLog = this.formatLog(
      level,
      severity,
      tracebackId,
      screenName,
      source,
      deviceInfo,
      '',
      message,
      stackTrace,
      timestamp,
    );

    // eslint-disable-next-line no-console
    console.log(formattedLog);
  }

  // eslint-disable-next-line class-methods-use-this
  private getScreenName(): string {
    return window.location.pathname || 'unknown-screen';
  }

  // eslint-disable-next-line class-methods-use-this
  private getSource(): string {
    return 'app';
  }

  // eslint-disable-next-line class-methods-use-this
  private getDeviceInfo(): string {
    const { userAgent } = window.navigator;
    let platform = '';

    if (userAgent.match(/Win/)) {
      platform = 'Windows';
    } else if (userAgent.match(/Mac/)) {
      platform = 'Mac';
    } else if (userAgent.match(/Linux/)) {
      platform = 'Linux';
    } else if (userAgent.match(/Android/)) {
      platform = 'Android';
    } else if (userAgent.match(/iPhone|iPad|iPod/)) {
      platform = 'iOS';
    } else {
      platform = 'Other';
    }

    const device = {
      userAgent,
      platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      onlineStatus: navigator.onLine,
    };

    return JSON.stringify(device);
  }

  // eslint-disable-next-line class-methods-use-this
  private generateTracebackId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }

  info(
    severity: Severity,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace?: string,
  ): void {
    this.log(
      LogLevel.INFO,
      severity || Severity.LOW,
      tracebackId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace,
    );
  }

  warn(
    severity: Severity,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace?: string,
  ): void {
    this.log(
      LogLevel.WARN,
      severity || Severity.LOW,
      tracebackId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace,
    );
  }

  error(
    severity: Severity,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace?: string,
  ): void {
    this.log(
      LogLevel.ERROR,
      severity || Severity.MEDIUM,
      tracebackId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace,
    );
  }

  fatal(
    severity: Severity,
    tracebackId: string,
    screenName: string,
    source: string,
    deviceInfo: string,
    data: string,
    message: string,
    stackTrace?: string,
  ): void {
    this.log(
      LogLevel.FATAL,
      severity || Severity.HIGH,
      tracebackId,
      screenName,
      source,
      deviceInfo,
      data,
      message,
      stackTrace,
    );
  }
}
